<!--
* @描述: 封装上传
* @姓名: HuangLongJun
* @时间: 2023-03-13 19:05:01
* @最后修改时间: 2023-03-13 19:05:01
* @最后修改人: HuangLongJun
-->

<template>
  <div>
    <el-upload
      v-if="url"
      ref="upload"
      :class="{ disabledClass: uploadDisabled && !drag }"
      :limit="limit"
      :action="url"
      :data="data"
      :headers="headers"
      :accept="accept"
      :list-type="drag || btnUpload ? 'text' : 'picture-card'"
      :multiple="multiple"
      :before-upload="beforeUploadImage"
      :on-success="handleSuccess"
      :on-progress="handleProgress"
      :on-remove="onRemove"
      :on-error="handleError"
      :file-list="fileList"
      :drag="drag"
      :on-exceed="masterFileMax"
    >
      <!-- 拖拽 -->
      <div v-if="drag">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">仅支持{{ fileType.join('/') }}格式文件</div>
        <slot name="dragText" />
      </div>

      <!-- 按钮 -->
      <el-button v-if="btnUpload" size="small" type="primary">
        {{ btnUploadText }}
      </el-button>
      <div v-if="btnUpload" slot="tip" class="el-upload__tip">
        仅支持{{ fileType.join('/') }}格式文件
      </div>

      <!-- 默认缩略图 -->
      <i v-if="!drag && !btnUpload" slot="default" class="el-icon-plus"></i>
      <div v-if="!drag && !btnUpload" slot="file" slot-scope="{ file }" class="img-wrap">
        <pdf v-if="isPdfUrl(file.url) || isPdfUrl(file.name)" :src="file.url" />
        <el-image v-else class="el-upload-list__item-thumbnail" :src="file.url" alt="">
          <div slot="error" class="image-slot">
            <i class="el-icon-document"></i>
          </div>
        </el-image>

        <span class="el-upload-list__item-actions">
          <!-- 大图查看 -->
          <span
            v-if="!disabled && uploadLook"
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <i class="el-icon-zoom-in"></i>
          </span>
          <!-- 下载 -->
          <span
            v-if="!disabled && uploadDownload"
            class="el-upload-list__item-delete"
            @click="handleDownload(file)"
          >
            <i class="el-icon-download"></i>
          </span>
          <!-- 删除 -->
          <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible" append-to-body>
      <pdf
        v-if="isPdfUrl(dialogImageUrlpdf)"
        v-for="i in numPages"
        :key="i"
        :src="dialogImageUrl"
        :page="i"
      />
      <el-image v-else :src="dialogImageUrl" alt="" style="display: block" />
    </el-dialog>
  </div>
</template>

<script>
import pdf from 'vue-pdf'; // 预览pdf
import { getToken } from '@/utils/auth';
export default {
  name: 'upload',
  components: {
    pdf,
  },
  // 上传成功 删除事件 上传中触发
  // emits: ["uploadSuccess", "uploadRemove","uploading"],
  props: {
    data: {
      // 链接上传参数
      type: Object,
      default() {
        return {};
      },
    },

    btnUpload: {
      // 按钮上传
      type: Boolean,
      default: false,
    },
    btnUploadText: {
      // 按钮上传文案
      type: String,
      default: '默认上传',
    },
    limit: {
      // 传单文件/多传
      type: Number,
      default: 1,
    },
    multiple: {
      // 多选文件
      type: Boolean,
      default: false,
    },
    name: {
      // name 必传 区分多个上传链接
      type: String,
      default: '',
      required: true,
    },
    url: {
      // 传入url是接口地址上传
      type: String,
      default: '',
      required: true,
    },
    fileList: {
      // 链接回显 格式[{url:'链接'}]
      type: Array,
      default() {
        return [];
      },
    },
    fileType: {
      // 上传文件类型
      type: Array,
      default() {
        return ['png', 'jpg', 'jpeg', 'pdf'];
      },
    },
    uploadDownload: {
      // 是否显示下载 默认显示
      type: Boolean,
      default: true,
    },
    uploadLook: {
      // 是否显示查看 默认显示
      type: Boolean,
      default: true,
    },
    isCheckEqualWH: {
      //是否检验图片等比
      type: Boolean,
      default: false,
    },
    isCheckWH: {
      //是否检验图片尺寸
      type: Boolean,
      default: false,
    },
    checkWidth: {
      //校验尺寸：宽
      type: Number,
      default: 0,
    },
    checkHeight: {
      //校验尺寸：高
      type: Number,
      default: 0,
    },
    // 默认缩略图
    drag: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      fileSuffix: '',
      dialogImageUrl: '',
      dialogImageUrlpdf: '',
      dialogVisible: false,
      disabled: false,
      uploadDisabled: false,
      numPages: 1,
    };
  },
  created() {},
  mounted() {
    if (this.btnUpload && this.drag) {
      return this.$message.error('按钮上传与拖拽上传只能二选一');
    }
  },
  computed: {
    // 上传headers头部
    headers: function () {
      return {
        Authorization: 'Bearer ' + getToken(),
      };
    },
    // 支持文件类型
    accept() {
      return this.fileType.reduce((previous, current) => {
        if (previous === '') {
          return '.' + current;
        }
        return previous + ',' + '.' + current;
      }, '');
    },
  },
  watch: {
    fileList: {
      handler(value) {
        this.uploadDisabled = value.length >= this.limit;
      },
      deep: true,
    },
  },
  methods: {
    // 判断文件类型是不是pdf
    isPdfUrl(url = '') {
      return url.substring(url.lastIndexOf('.') + 1) === 'pdf';
    },
    // 判断文件类型是不是mp3
    isMp3Url(url = '') {
      return url.substring(url.lastIndexOf('.') + 1) === 'mp3';
    },
    // 上传成功
    handleSuccess(res, file, fileList) {
      // 服务器错误
      if (res.code !== 200 && !res.data) {
        this.$message.error(res.msg);
        this.$refs.upload.uploadFiles = [];
        this.uploadDisabled = false;
        return;
      }
      this.$message.success(res.msg);
      this.uploadDisabled = this.$refs.upload.uploadFiles.length >= this.limit; // 上传到最大数量时 隐藏上传
      this.$emit('uploadSuccess', {
        name: this.name,
        files: this.$refs.upload.uploadFiles,
      });
    },
    // 缩略图模式 删除按钮
    handleRemove(file) {
      const index = this.$refs.upload.uploadFiles.findIndex((e) => e.uid === file.uid);
      this.$refs.upload.uploadFiles.splice(index, 1);
      this.uploadDisabled = false;
      this.$emit('uploadRemove', {
        name: this.name, // 触发删除的name
        files: this.$refs.upload.uploadFiles,
      });
    },
    // 拖拽模式 删除文件
    onRemove(file, fileList) {
      this.$emit('uploadRemove', {
        name: this.name,
        files: fileList,
      });
    },
    // 缩略图模式 查看按钮
    handlePictureCardPreview(file) {
      if (this.isPdfUrl(file.url) || this.isPdfUrl(file.name)) {
        this.dialogImageUrlpdf = '';
        const loadingTask = pdf.createLoadingTask(file.url);
        loadingTask.promise
          .then((pdf) => {
            // 如果pdf是 blob: 开头,则打开浏览器
            const regex = /^blob:/g;
            if (regex.test(file.url)) {
              window.open(file.url, '_blank');
              return;
            }
            this.dialogImageUrl = loadingTask;
            this.dialogImageUrlpdf = file.url;
            this.numPages = pdf.numPages;
            this.dialogVisible = true;
          })
          .catch((err) => {
            console.error('pdf加载失败');
            this.$message.error('pdf加载失败');
            this.dialogVisible = true;
          });
        return;
      }
      // mp3文件播放
      if (this.isMp3Url(file.url) || this.isMp3Url(file.name)) {
        const regex = /^blob:/g;
        if (regex.test(file.url)) {
          window.open(file.url, '_blank');
          return;
        }
      }
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 缩略图模式 下载按钮
    handleDownload(file) {
      window.open(file.url, '_blank');
    },
    // 上传前验证
    beforeUploadImage(file) {
      return new Promise((resolve, reject) => {
        this.fileSuffix = file.name.substring(file.name.lastIndexOf('.') + 1);
        const isImage = this.fileType.includes(this.fileSuffix);
        const isLt10M = file.size / 1024 / 1024 < 10;

        if (!isImage) {
          const arr = this.fileType;
          const str = arr.join('/');
          this.$message.error(`请上传${str}格式文件`);
          reject();
        }
        if (!isLt10M) {
          this.$message.error('上传图片大小不能超过 10MB！');
          reject();
        }
        if (this.isCheckEqualWH || this.isCheckWH) {
          const _URL = window.URL || window.webkitURL;
          const img = new Image();
          img.onload = () => {
            if (this.isCheckWH) {
              const flag = this.checkWH(img);
              if (flag) {
                resolve();
              } else {
                this.$message.error(`请上传尺寸${this.checkWidth}*${this.checkHeight}的图片`);
                reject();
              }
            } else {
              const flag = this.checkWHEqual(img);
              if (flag) {
                resolve();
              } else {
                this.$message.error(`请上传尺寸1:1的图片`);
                reject();
              }
            }
          };
          img.src = _URL.createObjectURL(file);
        } else {
          resolve();
        }
      });
    },
    checkWH(img) {
      return img.width === this.checkWidth && img.height === this.checkHeight;
    },
    checkWHEqual(img) {
      return img.width === img.height;
    },
    // api上传错误提示
    handleError(err) {
      this.$alert(`${err}`, '失败', {
        dangerouslyUseHTMLString: true,
        customClass: 'alertUploadErrorClass',
        confirmButtonText: '确定',
        type: 'error',
        center: true,
      });
      this.$emit('uploadError');
    },
    // 超过最大上传数
    masterFileMax() {
      this.$message.warning(`请最多上传${this.limit}个文件。`);
    },
    // 正在上传
    handleProgress(e) {
      this.$emit('uploading', e);
    },
  },
};
</script>
<style scoped lang="scss">
/* text卡片模式 */
::v-deep .el-upload--text {
  .el-upload-dragger {
    height: 100%;
  }
  .el-upload__tip {
    margin: 0 0 40px;
  }
}

/* picture-card样式 */
::v-deep .el-upload--picture-card {
  width: 100px;
  height: 100px;
  line-height: 100px;
  .el-icon-plus {
    font-size: 20px;
    line-height: 0;
  }

  .is-uploading {
    width: 100px;
    height: 100px;
  }
}
::v-deep .el-upload-list--picture-card {
  width: 100px;
  height: 100px;
  .el-upload-list__item {
    width: 100px;
    height: 100px;
    .img-wrap {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      .image-slot {
        width: 100px;
        height: 100px;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .el-upload-list__item-thumbnail {
    width: 100px;
    height: 100px;
  }
  .el-upload-list__item-actions {
    width: 100px;
    height: 100px;
  }
}

::v-deep .disabledClass {
  width: 100%;
  height: 100%;
  .el-upload--picture-card {
    display: none !important;
  }
}
/* 去掉动画 */
::v-deep .el-list-enter-active,
::v-deep .el-list-leave-active {
  transition: all 0s;
}

::v-deep .el-list-enter,
.el-list-leave-active {
  opacity: 0;
  transform: translateY(0);
}
</style>
<style lang="scss">
.alertUploadErrorClass {
  .el-message-box__message {
    font-size: 18px;
  }
}
</style>
