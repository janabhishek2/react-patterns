// replace params
const initUrl = "/posts/:postId/comments/:commentId";
const replaceParamsInUrl = (url, array) => {
    let newUrl = url;
    array.forEach((item) => {
        const { from, to } = item;
        const regex = new RegExp(`:${from}`);
        newUrl = newUrl.replace(regex, to);
    });
    return newUrl
};

const resultUrl = replaceParamsInUrl(initUrl, [
    {
        from: "postId", to: "1"
    },
    {
        from: "commentId", to: "3"
    }
]);

console.log(resultUrl);
