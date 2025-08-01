import { TextField } from '@mui/material';
type Props = {
    name:string,
    type: string,
    label : string,
}

const CustomizedInput = (props: Props) => {
  return <TextField sx={{
        "& label": {
          color: "white",
        },
        "& label.Mui-focused": {
          color: "white",
        },
        "& .MuiInputBase-input": {
          color: "white", // <-- input text color
        },
        // "& .MuiOutlinedInput-notchedOutline": {
        //   borderColor: "white",
        // },
        // "&:hover .MuiOutlinedInput-notchedOutline": {
        //   borderColor: "white",
        // },
        // "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        //   borderColor: "#00FFFF", // you can customize this
        // },
      }} margin='normal' name={props.name} type={props.type} label={props.label} />;
}

export default CustomizedInput;
