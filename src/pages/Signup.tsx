import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import CustomizedInput from '../components/shared/CustomizedInput';
import { RiLoginBoxLine } from "react-icons/ri";
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const auth = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    console.log(email, password);
    try {
      toast.loading("Signing Up!", { id: "signup" });
      await auth?.signup(name, email, password);
      toast.success("Signed Up Successfully!", { id: "signup" });
      // navigate("/chat");
    } catch (error) {
      console.log(error);
      toast.error("Signing Up Failed!", { id: "signup" });
    }
  };
  useEffect(() => {
    if (auth?.user) {
      navigate("/chat");
    }
  }, [auth]);

  return (<Box width={"100%"} height={"100%"} display="flex" flex={1}>
    {/* box for the image */}
    <Box padding ={8} mt={8} display={{md:"flex", sm:"none", xs:"none"}}><img src="airobot.png" alt="Robot" style={{width: "300px"}}/></Box>

    {/* box for the form */}
    <Box display={'flex'} flex={{xs:1, md:0.5}} justifyContent={'center'} alignItems={"center"} padding={2} ml={'auto'} mt={16}></Box>
      <form onSubmit={handleSubmit} style={{margin: "auto", padding: "30px", boxShadow: "10px 10px 20px #000", borderRadius: "10px", border: "none"}}>
        <Box sx ={{display: "flex", flexDirection: "column", justifyContent:"center"}}>
        <Typography variant="h4" textAlign={"center"} padding={2} fontWeight={600}>Signup</Typography>
        <CustomizedInput name="name" type="text" label="Name" />
        <CustomizedInput name="email" type="email" label="Email" />
        <CustomizedInput name="password" type="password" label="Password" />
        <Button type="submit" sx={{px: 2, py: 1, mt: 2, width:"400px", borderRadius:2, bgcolor:"#00fffc", ":hover": {bgcolor: "white", color: "black"}}} variant="contained" endIcon={<RiLoginBoxLine />}>Signup</Button>
        </Box>
      </form>
  </Box>
  );

};

export default Signup;
