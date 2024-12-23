// replace params
const initUrl = "/posts/:postId/comments/:commentId";
const replaceParamsInUrl = (url, arrayOfParams) => {
    return arrayOfParams.reduce((acc, curr) => {
        return acc.replace(`:${curr.from}`, curr.to)
    }, url);
}

const resultUrl = replaceParamsInUrl(initUrl, [
    {
        from: "postId", to: "1"
    },
    {
        from: "commentId", to: "3"
    }
]);

console.log(resultUrl);
