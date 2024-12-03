export const inputTextField = (screen) => [
    {
        id:"1",
        label:"Name",
        type:"text",
        placeholder:"eg. John A",
        name:"userName",
        hidden: screen === 'login',
    },
    {
        id:"2",
        label:"Phone Number",
        type:"number",
        placeholder:"Enter your 10 digit mobile number",
        name:"phoneNo",
        hidden: screen === 'login'
    },
    {
        id:"3",
        label: "Email",
        type:"email",
        placeholder:"Example@email.com",
        name:"email",
    },
    {
        id:"4",
        label:"Password",
        type:"password",
        placeholder:"At least 8 characters",
        name:"password",
    },
].filter((item) => !item?.hidden);