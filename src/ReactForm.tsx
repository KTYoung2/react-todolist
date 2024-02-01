import { error } from "console";
import React, { useState } from "react";
import { useForm } from "react-hook-form";


/*
*/

type IformData = {
    errors: {
        message: string;
      };
    email : string;
    name : string;
    username:string;
    password1 : string;
    password2 : string;
    extraError?:string;
};

function ReactForm() {
    const { register , handleSubmit, formState : {errors}, setError} = useForm<IformData>();
    const onValid = (data:IformData) => {
        if(data.password1 !== data.password2) {
            setError("password2", { message : "비밀번호 다름요"}, {shouldFocus : true})
        };

        setError("extraError", { message : "sever offline"})
    };
    return (
        <div>
          <form style={{
            display:"flex",
            flexDirection:"column",
            width: 300,
            height: 300,
          }}
            onSubmit={handleSubmit(onValid)}>
            <input {...register("email", { 
                    required: "Email is Required", 
                    pattern: {
                        value : /^[A-Za-z0-9._%+-]+@naver.com$/,
                        message : "오직 네이버만 가능요",
                    },
                    })} 
                    placeholder="Email" />
            <span>{errors.email?.message}</span>
            <input {...register("name", { 
                            required:true,
                            validate: (value) => 
                                value.includes("fuck") ? "비속어 사용 금지" : true, 
                        })} placeholder="Name" />
            <input {...register("username", 
                        {   required:true, 
                            minLength: {
                             value : 5,
                             message :"너무 짧긩",   
                        },
                     })} 
                        placeholder="userName" />
            <span>{errors.username?.message}</span>
            <input {...register("password1", { required:true })} placeholder="Password" />
            <input {...register("password2", { required:true })} placeholder="Password Check" />
            <span>{errors.password2?.message}</span>
            <button>Add</button>
          </form>
        </div>
      );
}

