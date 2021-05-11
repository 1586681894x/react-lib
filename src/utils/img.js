export const ImgResize = (file, size, callback) => {
    // 压缩图片需要的一些元素和对象
    const reader = new FileReader();
    const img = new Image();

    reader.readAsDataURL(file);
    // 文件base64化，以便获知图片原始尺寸
    reader.onload = function (e) {
        img.src = e.target.result;
    };

    // base64地址图片加载完毕后执行
    img.onload = function () {
        // 缩放图片需要的canvas（也可以在DOM中直接定义canvas标签，这样就能把压缩完的图片不转base64也能直接显示出来）
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        // 图片原始尺寸
        const originWidth = this.width;
        const originHeight = this.height;
        // 最大尺寸限制，可通过设置宽高来实现图片压缩程度
        const maxWidth = 750;
        const maxHeight = 750;
        // 目标尺寸
        let targetWidth = originWidth;
        let targetHeight = originHeight;
        // 图片尺寸超过300x300的限制
        if (originWidth > maxWidth || originHeight > maxHeight) {
            if (originWidth / originHeight > maxWidth / maxHeight) {
                // 更宽，按照宽度限定尺寸
                targetWidth = maxWidth;
                targetHeight = Math.round(maxWidth * (originHeight / originWidth));
            } else {
                targetHeight = maxHeight;
                targetWidth = Math.round(maxHeight * (originWidth / originHeight));
            }
        }
        // canvas对图片进行缩放
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        // 清除画布
        context.clearRect(0, 0, targetWidth, targetHeight);
        // 图片压缩
        context.drawImage(img, 0, 0, targetWidth, targetHeight);
        /* 第一个参数是创建的img对象；第二三个参数是左上角坐标，后面两个是画布区域宽高 */
        // 压缩后的图片转base64 url
        /* canvas.toDataURL(mimeType, qualityArgument),mimeType 默认值是'image/png'; */
        const newUrl = canvas.toDataURL('image/jpeg', 0.3 * size); // base64 格式
        // 也可以把压缩后的图片转blob格式用于上传
        canvas.toBlob((blob) => {
            // 把blob作为参数传给后端
            callback(blob, newUrl);
        }, 0.3 * size) // 'image/jpeg',
    };
};
