import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQueryWrapper = async (req, args, extraOptions) => {
    const baseQuery = fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    });
    const result = await baseQuery(req, args, extraOptions);
    return result;
}