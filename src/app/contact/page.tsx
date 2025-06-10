"use client";

import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";

interface FormData {
    name: string; // 姓名
    phone: string; // 電話
    edu: string; //  學制
    email: string; // 電子郵件
    remarks: string; //備註
}

export default function MemberForm() {
    // 表單狀態
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        edu: "",
        email: "",
        remarks:"",
    });


    // 處理表單提交
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formDataString =
            "姓名: " +
            formData.name +
            "\n" +
            "電話: " +
            formData.phone +
            "\n" +
            "學制: " +
            formData.edu +
            "\n" +
            "電子郵件: " +
            formData.email +
            "\n"+
           "備註: " +
            formData.remarks;
        alert("表單資料: \n" + formDataString);
    };

    return (
        // css flex: 使用 flexbox 來排版
        // justify-center: 水平置中
        // items-center: 垂直置中
        // min-h-screen: 最小高度為螢幕高度
        <div className="flex justify-center items-center min-h-screen">
            <Card title="新增聯絡人" className="w-full max-w-md">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">
                            姓名
                        </label>
                        <InputText
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone">電話</label>
                        <InputText
                            id="phone"
                            type="phone"
                            value={formData.phone}
                            onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                            }
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label>學制</label>
                        <div className="flex gap-4">
                            <div className="flex items-center">
                                <RadioButton
                                    inputId="bachelor"
                                    name="edu"
                                    value="bachelor"
                                    checked={formData.edu === "bachelor"}
                                    onChange={(e) =>
                                        setFormData({ ...formData, edu: e.value })
                                    }
                                />
                                <label htmlFor="bachelor" className="ml-2">
                                    大學部
                                </label>
                            </div>
                            <div className="flex items-center">
                                <RadioButton
                                    inputId="master"
                                    name="edu"
                                    value="master"
                                    checked={formData.edu === "master"}
                                    onChange={(e) =>
                                        setFormData({ ...formData, edu: e.value })
                                    }
                                />
                                <label htmlFor="master" className="ml-2">
                                    碩士班
                                </label>
                            </div>
                             <div className="flex items-center">
                                <RadioButton
                                    inputId="doctoral"
                                    name="edu"
                                    value="doctoral"
                                    checked={formData.edu === "doctoral"}
                                    onChange={(e) =>
                                        setFormData({ ...formData, edu: e.value })
                                    }
                                />
                                <label htmlFor="doctoral" className="ml-2">
                                    博士班
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">電子郵件</label>
                        <InputText
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="remarks">備註</label>
                        <InputTextarea
                            id="remarks"
                            value={formData.remarks}
                            onChange={(e) =>
                                setFormData({ ...formData, remarks: e.target.value })
                            }
                            rows={5} cols={30}
                        />
                    </div>
                   
                    <Button type="submit" label="新增" className="mt-4" />
                </form>
            </Card>
        </div>
    );
}
