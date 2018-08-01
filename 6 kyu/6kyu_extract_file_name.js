class FileNameExtractor {
    static extractFileName(dirtyFileName) {
        console.log(dirtyFileName);
        return dirtyFileName.match(/[^\d][\w_-]+\.[\w]+/)[0].slice(1);
    }
}