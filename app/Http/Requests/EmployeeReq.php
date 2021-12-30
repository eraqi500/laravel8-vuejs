<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeReq extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|unique:employees|max:255',
            'email' => 'required',
            'phone' => 'required|unique:employees'
        ];
    }

    public function messages()
    {
        return[
            'name.required'=> 'please enter your right name',
            'email.required' => 'We need your email address also',
            'phone.required'=> 'please leave some number to call You Idiot',
        ];
    }
}
