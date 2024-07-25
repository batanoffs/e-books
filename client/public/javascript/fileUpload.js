FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginFileEncode,
    FilePondPluginImageResize,
)

FilePond.setOptions({
    stylePanelAspectRatio: 150 / 100,
    imageResizeTargetWidth: 150,
    imageResizeTargetHeight: 100,
    imageResizeUpscale: true,
})

FilePond.parse(document.body);