import { useState } from "react";
import { useForm } from "react-hook-form";

/*  
    react-hook-form
    : 사용하기 쉬운 유효성 검사를 통해 성능이 뛰어나고 유연하며 확장 가능한 
     리액트 훅 라이브러리

    const { register , watch , hadleSubmit , formState}

    - register(name:string, RegisterOption?) => ({onChange, onBlur, name, ref})
     : 이 함수를 사용하면 input 등록하거나 element를 선택하고 유효성 검사 규칙을 
     react-hook-form에 적용할 수 있다. 유효성 검사 규칙은 모두 HTML 표준으로 기반하며
     사용자 지정 유효성 검사 방법도 허용

    - watch(names?:string | string[] | (data,options)=> void) => unknown
    : input의 변화를 구독. 이메서드는 지정된 input을 감시하고 해당값을 반환한다. 
    input값을 렌더링하고 조건에 따라 무엇을 렌더링할지 결정하는데 유용.

    -hadleSubmit
    이함수는 form 휴요성 검사가 성공하면 form데이타를 받는다. 
    handleSubmit()은 두 개의 인자를 받는데, 
    1.데이터가 유효할 때 호출 되는 함수 (필수)
    2.데이터가 유효하지 않을 때 호출되는 함수(필수 x)

    -formState
    => 자세한 설명
    https://velog.io/@boyeon_jeong/React-Hook-Form-formState 
*/

type FormData = {
    firstName: string;
    userName: string;
    email:string;
    passWord:string;
    passWord1:string;
}

function ToDoList() {
    const { register , handleSubmit, formState :{errors} } = useForm<FormData>({
        defaultValues : {
            //기본값도 설정가능
            email : "@naver.com",
        }
    });
    const onValid = (data:any) => {
        console.log(data);
    }
    return ( 
      <div>
        <form 
            style={{display:"flex", flexDirection:"column"}}
            onSubmit={handleSubmit(onValid)}>
            <input 
                {...register("email", { 
                /* html required 설정을 해서 보호받을 수 있지만, 보호 수준이 낮아서
                    js로  { required: true } 더 강한 보호를 받을 수 있고,
                    리액트 폼 훅이 커서를 알아서 비어있는 칸에 옮겨줌 ! */
                    required: true , 
                    /* 정규식 패턴 유효 설정도 가능*/
                    pattern: {
                        value : /^[A-Za-z0-9._%+-]+@naver.com$/,
                        message : "오직 네이버만 가능",
                    },
                })}
                placeholder="Email"/>
                {/* 유저에게 에러 메세지 출력 (메세지를 설정해야만, 메시지 출력잼) */}
                <span style={{color:"red"}}>
                    {errors?.email?.message}
                </span>
            <input 
                {...register("firstName", { 
                    required: {
                    value : true,
                    message : "이름을 적어주세요",
                } })}
                placeholder="First Name"/>
                <span style={{color:"red"}}>
                    {errors?.firstName?.message}
                </span>
            <input 
                {...register("userName", { 
                    required: true, 
                    minLength: {
                        value:5,
                        message:"이름짧긔",
                    },
                })} 
                placeholder="User Name"/>
                <span style={{color:"red"}}>
                    {errors?.userName?.message}
                </span>
            <input 
                {...register("passWord", { 
                    required: true, 
                   /* if문으로 유효성 검사 안 하고 minLength 유효성 검사쌉 ㅋ */
                    minLength: 5 })}
                placeholder="PassWord"/>
            <input 
                {...register("passWord1", { required: true , minLength: 5 })}
                placeholder="PassWord Confirm"/>
            <button>Add</button>
        </form>
      </div>
    );
  
  }
  
  export default ToDoList;
  