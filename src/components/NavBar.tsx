"use client";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";

export default function NavBar() {
    const router = useRouter();
    const items = [
        {
            label: "登入 Login",
            icon: "pi pi-user",
            command: () => router.push("/login"),
        },
        {
            label: "註冊 Register",
            icon: "pi pi-user",
            command: () => router.push("/register"),
        },
         {
            label: "新增聯絡人 New Contact",
            icon: "pi pi-user",
            command: () => router.push("/contact"),
        },
       {
            label: "會員管理 Member Management",
            icon: "pi pi-user",
            command: () => router.push("/members"),
        },
         {
            label: "聯絡人列表 Contact Management",
            icon: "pi pi-user",
            command: () => router.push("/conman"),
        },
        {
            label: "購物車 Shopping Cart",
            icon: "pi pi-shopping-cart",
            command: () => router.push("/cart"),
        },
    ];
    const end = (
        <div className="flex align-items-center gap-2">
            <Button icon="pi pi-user" rounded text />
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} end={end} />
        </div>
    );
}