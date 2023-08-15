import axios from "axios";

export const createItem = async (token, data) => {
    try {
        const result = await axios({
            url: `${process.env.NEXT_PUBLIC_API_URL}/udl/`,
            method: "post",
            headers: { authorization: token, ...data },
            withCredentials: true,
        });
        return result.status == 200 ? result.data : null;
    } catch (err) {
        return null;
    }
};

export const updateItem = async (token, data) => {
    try {
        const result = await axios({
            url: `${process.env.NEXT_PUBLIC_API_URL}/udl/`,
            method: "put",
            headers: { authorization: token, ...data },
            withCredentials: true,
        });

        return result.status == 200 ? result.data : null;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const getItems = async (token, data) => {
    try {
        const result = await axios({
            url: `${process.env.NEXT_PUBLIC_API_URL}/udl/`,
            method: "get",
            headers: { authorization: token, ...data },
            withCredentials: true,
        });
        return result.status == 200 ? result.data : null;
    } catch (err) {
        return null;
    }
};

export const deleteItem = async (token, data) => {
    try {
        const result = await axios({
            url: `${process.env.NEXT_PUBLIC_API_URL}/udl/`,
            method: "delete",
            headers: { authorization: token, ...data },
            withCredentials: true,
        });

        return result.status == 200 ? result.data : null;
    } catch (err) {
        console.log(err);
        return null;
    }
};
