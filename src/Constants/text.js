
export const text = (title) => [
    {
        id: "1",
        itemType: "Terms and conditions",
        hidden: title === "Important Links"
    },
    {
        id: "2",
        itemType: "Privacy",
        hidden: title === "Important Links"
    },
    {
        id: "3",
        itemType: "Cookies",
        hidden: title === "Important Links"
    },
    {
        id: "4",
        itemType: "Modern Slavery Statement",
        hidden: title === "Important Links"
    },
    {
        id: "5",
        itemType: "Get help",
        hidden: title === "Legal Pages"
    },
    {
        id: "6",
        itemType: "Add your restaurant",
        hidden: title === "Legal Pages"
    },
    {
        id: "7",
        itemType: "Sign up to deliver",
        hidden: title === "Legal Pages"
    },
    {
        id: "8",
        itemType: "Create a business account",
        hidden: title === "Legal Pages"
    }
].filter((item)=> !item?.hidden)