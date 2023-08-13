import axios from "axios";

export const signin = async (data) => {
    try {
        const result = await axios({
            url: `${process.env.NEXT_PUBLIC_API_URL}/user/signin`,
            method: "post",
            headers: data,
            withCredentials: true,
        });
        return result.status == 200 ? result.data : null;
    } catch (err) {
        return null;
    }
};

export const login = async (data) => {
    try {
        const result = await axios({
            url: `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
            method: "get",
            headers: data,
            withCredentials: true,
        });

        return result.status == 200 ? result.data : null;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const logout = async (authorization) => {
    try {
        const result = await axios({
            url: `${process.env.NEXT_PUBLIC_API_URL}/user/logout`,
            method: "get",
            headers: { authorization },
            withCredentials: true,
        });
        return result.status == 200 ? result.data : null;
    } catch (err) {
        return null;
    }
};
