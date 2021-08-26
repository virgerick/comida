
import { useState } from "react";
enum types{
  selectOne='select-one',
  checkbox='checkbox',
  text='text'

}
export const useForm = <T extends Object>(initialState: T) => {
  const [formState, setFormState] = useState<T>(initialState);

  const handleInputChange = ({target}: any) => {
    try {
      const { name, value,type} = target;
      
      switch (type) {
        case types.text:
          setFormState({ ...formState, [name]: value});
          break;
        case types.selectOne:
          setFormState({ ...formState, [name]: target.selected });
          break;
        case types.checkbox:
          setFormState({ ...formState, [name]: target.checked });
          break;
      
        default:
          setFormState({ ...formState, [name]: value });
          break;
      }
      
    } catch (error) {
      throw error
    }
  };
  return { formState, setFormState, handleInputChange };
};
