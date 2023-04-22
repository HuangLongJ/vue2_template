<template>
  <div>
    <!-- 不穿url 七牛上传 -->
    <el-upload
      v-if="!url"
      ref="upload"
      :class="{ disabledClass: uploadDisabled && !drag }"
      :limit="limit"
      :action="url"
      :headers="headers"
      :accept="accept"
      :list-type="drag || btnUpload ? 'text' : 'picture-card'"
      :multiple="multiple"
      :before-upload="beforeUploadImage"
      :on-success="handleSuccess"
      :on-progress="handleProgress"
      :on-remove="onRemove"
      :on-error="handleError"
      :http-request="customerUpload"
      :file-list="fileList"
      :drag="drag"
      :on-exceed="masterFileMax"
    >
      <!-- 拖拽 -->
      <div v-if="drag">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">
          仅支持{{ fileType.join("/") }}格式文件
        </div>
        <slot name="dragText" />
      </div>

      <!-- 按钮 -->
      <el-button v-if="btnUpload" size="small" type="primary">
        {{ btnUploadText }}
      </el-button>
      <div v-if="btnUpload" slot="tip" class="el-upload__tip">
        仅支持{{ fileType.join("/") }}格式文件
      </div>

      <!-- 缩略图 -->
      <i v-if="!drag && !btnUpload" slot="default" class="el-icon-plus"></i>
      <div
        v-if="!drag && !btnUpload"
        slot="file"
        slot-scope="{ file }"
        class="img-wrap"
      >
        <pdf
          v-if="disposeUrl(file.url) || disposeUrl(file.name)"
          :src="file.url"
        />
        <img
          v-else
          class="el-upload-list__item-thumbnail"
          :src="file.url"
          alt=""
        />

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
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </el-upload>
    <!-- 传入url -->
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
        <div class="el-upload__tip" slot="tip">
          仅支持{{ fileType.join("/") }}格式文件
        </div>
        <slot name="dragText" />
      </div>

      <!-- 按钮 -->
      <el-button v-if="btnUpload" size="small" type="primary">
        {{ btnUploadText }}
      </el-button>
      <div v-if="btnUpload" slot="tip" class="el-upload__tip">
        仅支持{{ fileType.join("/") }}格式文件
      </div>

      <!-- 默认缩略图 -->
      <i v-if="!drag && !btnUpload" slot="default" class="el-icon-plus"></i>
      <div
        v-if="!drag && !btnUpload"
        slot="file"
        slot-scope="{ file }"
        class="img-wrap"
      >
        <pdf
          v-if="disposeUrl(file.url) || disposeUrl(file.name)"
          :src="file.url"
        />
        <img
          v-else
          class="el-upload-list__item-thumbnail"
          :src="file.url"
          alt=""
        />

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
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible" append-to-body>
      <pdf
        v-if="disposeUrl(dialogImageUrlpdf)"
        v-for="i in numPages"
        :key="i"
        :src="dialogImageUrl"
        :page="i"
      />
      <img v-else width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
import store from "@/store";
import * as qiniu from "qiniu-js";
import pdf from "vue-pdf";
import { getQNtoken, QNImgUrl } from "@/api/component/upload.js";
export default {
  name: "upload",
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
      // 上传文案
      type: String,
      default: "默认上传",
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
    url: {
      // 传入url是接口地址上传 不传默认七牛
      type: String,
      default: "",
    },
    name: {
      // name 必传 区分多个上传链接
      type: String,
      default: "",
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
        return ["png", "jpg", "jpeg", "pdf"];
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
      QNtoken: "", //七牛token
      fileSuffix: "",
      dialogImageUrl: "",
      dialogImageUrlpdf: "",
      dialogVisible: false,
      disabled: false,
      uploadDisabled: false,
      numPages: 1,
    };
  },
  created() {
    getQNtoken().then((res) => {
      this.QNtoken = res.data.data;
    });
  },
  mounted() {
    if (this.btnUpload && this.drag) {
      return this.$message.error("按钮上传与拖拽上传只能二选一");
    }
  },
  computed: {
    headers: function () {
      const tenantId = store.getters.userInfo.tenantId;
      return {
        Authorization: "Bearer " + store.getters.access_token,
        "TENANT-ID": tenantId ? tenantId : "1",
      };
    },
    accept() {
      return this.fileType.reduce((previous, current) => {
        if (previous === "") {
          return "." + current;
        }
        return previous + "," + "." + current;
      }, "");
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
    // 自定义上传
    customerUpload({ file, onProgress, onSuccess, beforeUpload }) {
      const fileType = file.name.substring(file.name.lastIndexOf("."));

      const token = this.QNtoken;
      const date = new Date();
      const key = `foodism/${date.getFullYear()}/${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getTime() + fileType}`;
      const next = (res) => {
        // 上传进度
        // console.log("success", res);
        // res 返回参数
        // total:{
        // loaded已上传大小
        // size本次上传的总量控制信息
        // percent当前上传进度
        // }
        // 默认进度条
        onProgress({ percent: res.total.percent });
      };
      const error = (err) => {
        // 上传失败
        this.$message.error(err.msg);
        return false;
      };
      const complete = ({ key }) => {
        console.log(key);
        // 上传成功
        const imgUrl = QNImgUrl() + "/" + key;
        onSuccess({
          code: 0,
          data: {
            url: imgUrl,
          },
        });
      };
      this.upload(token, key, file, next, error, complete);
    },
    // 上传七牛云
    async upload(token, key, file, next, error, complete) {
      const putExtra = {
        fname: file.name, // fname: string，文件原文件名
        mimeType: null, // mimeType: null || array，用来限制上传文件类型，为 null 时表示不对文件类型限制；限制类型放到数组里： ["image/png", "image/jpeg", "image/gif"]
      };
      const config = {
        useCdnDomain: true,
        region: qiniu.region.z0,
        // region, //z0华东区域 z1华北区域  z2代表华南区域  na0北美区域   as0新加坡区域
      };

      const options = {
        quality: 0.92,
        noCompressIfLarger: true,
      };
      try {
        // 支持压缩 上传
        const { dist } = await qiniu.compressImage(file, options);
        const observable = qiniu.upload(dist, key, token, putExtra, config);
        observable.subscribe(next, error, complete); // 上传开始
      } catch (error) {
        // 不支持压缩 上传
        const observable = qiniu.upload(file, key, token, putExtra, config);
        observable.subscribe(next, error, complete); // 上传开始
      }
    },
    // 判断文件类型是不是pdf
    disposeUrl(url = "") {
      return url.substring(url.lastIndexOf(".") + 1) === "pdf";
    },
    // 上传成功
    handleSuccess(res) {
      // 服务器错误
      if (res.code !== 0 && !res.data) {
        this.$message.error(res.msg);
        this.$refs.upload.uploadFiles = [];
        this.uploadDisabled = false;
        return;
      }
      if (res.code !== 0 && res.data) {
        this.$message.error(res.msg);
      }
      this.uploadDisabled = this.$refs.upload.uploadFiles.length >= this.limit; // 上传到最大数量时 隐藏上传
      this.$emit("uploadSuccess", Object.assign({ name: this.name }, res.data));
    },
    // 缩略图模式 删除按钮
    handleRemove(file) {
      const index = this.$refs.upload.uploadFiles.findIndex(
        (e) => e.uid === file.uid
      );
      this.$refs.upload.uploadFiles.splice(index, 1);
      this.uploadDisabled = false;
      this.$emit("uploadRemove", {
        name: this.name, // 触发删除的name
        files: this.$refs.upload.uploadFiles,
      });
    },
    // 拖拽模式 删除文件
    onRemove(file, fileList) {
      this.$emit("uploadRemove", {
        name: this.name,
        files: fileList,
      });
    },
    // 缩略图模式 查看按钮
    handlePictureCardPreview(file) {
      if (this.disposeUrl(file.url) || this.disposeUrl(file.name)) {
        this.dialogImageUrlpdf = "";
        const loadingTask = pdf.createLoadingTask(file.url);
        loadingTask.promise
          .then((pdf) => {
            // 如果pdf是 blob: 开头,则打开浏览器
            const regex = /^blob:/g;
            if (regex.test(file.url)) {
              window.open(file.url, "_blank");
              return;
            }
            this.dialogImageUrl = loadingTask;
            this.dialogImageUrlpdf = file.url;
            this.numPages = pdf.numPages;
            this.dialogVisible = true;
          })
          .catch((err) => {
            console.error("pdf加载失败");
            this.$message.error("pdf加载失败");
            this.dialogVisible = true;
          });
        return;
      }
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 缩略图模式 下载按钮
    handleDownload(file) {
      window.open(file.url, "_blank");
    },
    // 上传前验证
    beforeUploadImage(file) {
      // 获取图片的宽高
      return new Promise((resolve, reject) => {
        this.fileSuffix = file.name.substring(file.name.lastIndexOf(".") + 1);
        const isImage = this.fileType.includes(this.fileSuffix);
        const isLt10M = file.size / 1024 / 1024 < 10;

        if (!isImage) {
          const arr = this.fileType;
          const str = arr.join("/");
          this.$message.error(`请上传${str}格式文件`);
          reject();
        }
        if (!isLt10M) {
          this.$message.error("上传图片大小不能超过 10MB！");
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
                this.$message.error(
                  `请上传尺寸${this.checkWidth}*${this.checkHeight}的图片`
                );
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
      this.$alert(`${err}`, "失败", {
        dangerouslyUseHTMLString: true,
        customClass: "alertUploadErrorClass",
        confirmButtonText: "确定",
        type: "error",
        center: true,
      });
    },
    // 超过最大上传数
    masterFileMax() {
      this.$message.warning(`请最多上传${this.limit}个文件。`);
    },
    // 正在上传
    handleProgress(e) {
      this.$emit("uploading", e);
    },
  },
};
</script>
<style scoped lang="scss">
/* text卡片模式 */
/deep/.el-upload--text {
  .el-upload-dragger {
    height: 100%;
  }
  .el-upload__tip {
    margin: 0 0 40px;
  }
}

/* picture-card样式 */
/deep/.el-upload--picture-card {
  width: 100px;
  height: 100px;
  line-height: 100px;
  .el-icon-plus {
    font-size: 24px;
  }

  .is-uploading {
    width: 100px;
    height: 100px;
  }
}
/* picture-card样式 */
/deep/.el-upload-list--picture-card {
  width: 100px;
  height: 100px;
  .el-upload-list__item {
    width: 100px;
    height: 100px;
    margin: 0;
    .img-wrap {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
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

/deep/ .disabledClass {
  width: 100%;
  height: 100%;
  .el-upload--picture-card {
    display: none !important;
  }
}
</style>
<style lang="scss">
.alertUploadErrorClass {
  .el-message-box__message {
    font-size: 18px;
  }
}
</style>
