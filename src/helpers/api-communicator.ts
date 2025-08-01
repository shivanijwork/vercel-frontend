import axios from "axios";


export const loginUser = async (email: string, password: string) => {
    const res = await axios.post('http://localhost:5000/api/v1/user/login', {email, password});
    //      {
    //     withCredentials: true
    // });
    if(res.status !== 200 && res.status !== 201){
        throw new Error("Login failed");
    }
    const data = await res.data;
    return data;
};

export const checkAuthStatus = async () => {
    const res = await axios.get('http://localhost:5000/api/v1/user/auth-status');
    //      {
    //     withCredentials: true
    // });
    if(res.status !== 200 && res.status !== 201){
        throw new Error("Unable to Authenticate");
    }
    const data = await res.data;
    return data;
};

export const sendChatRequest = async (message: string) => {
    const res = await axios.post('http://localhost:5000/api/v1/chat/new', { message });
    //      {
    //     withCredentials: true
    // });
    if(res.status !== 200 && res.status !== 201){
        throw new Error("Unable to send chat request");
    }
    
    const data = await res.data;
    return data;
};
// export const sendChatRequest = async (message: string) => {
//   const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
//       "HTTP-Referer": "http://localhost:5173", // or your deployed site
//       "X-Title": "MERN-AI-Chatbot",
//     },
//     body: JSON.stringify({
//       model: "openai/gpt-3.5-turbo",
//       messages: [
//         {
//           role: "user",
//           content: message,
//         },
//       ],
//     }),
//   });

//   const data = await response.json();
//   return {
//     chats: [
//       { role: "user", content: message },
//       { role: "assistant", content: data.choices[0].message.content },
//     ],
//   };
// };

export const getUserChats = async () => {
    const res = await axios.get('http://localhost:5000/api/v1/chat/all-chats');
    //      {
    //     withCredentials: true
    // });
    if(res.status !== 200 && res.status !== 201){
        throw new Error("Unable to send chat request");
    }
    const data = await res.data;
    return data;
};

export const deleteUserChats = async () => {
    const res = await axios.delete('http://localhost:5000/api/v1/chat/delete');
    //      {
    //     withCredentials: true
    // });
    if(res.status !== 200 && res.status !== 201){
        throw new Error("Unable to delete chats");
    }
    const data = await res.data;
    return data;
};

export const logoutUser = async () => {
    const res = await axios.get('/user/logout');
    //      {
    //     withCredentials: true
    // });
    if(res.status !== 200 && res.status !== 201){
        throw new Error("Unable to delete chats");
    }
    const data = await res.data;
    return data;
};
export const signupUser = async (name : string, email: string, password: string) => {
    const res = await axios.post('http://localhost:5000/api/v1/user/signup', {name, email, password});
    //      {
    //     withCredentials: true
    // });
    if(res.status !== 201){
        throw new Error("Unable to Signup");
    }
    const data = await res.data;
    return data;
};