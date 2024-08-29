import {useState} from "react";

export const AddCategory = ({onNewCatergory}) => {

    const [inputValue, setinputValue] = useState("");

    const onInputChange = (event)=> {
        setinputValue(event.target.value);
    }

    const onSubmit = (event)=> {
        event.preventDefault();

        if (inputValue.trim().length <= 1) {return;}

        //setCategories(categories => [inputValue,...categories]);
        onNewCatergory(inputValue.trim());
        setinputValue("");
    }

    return (
        <form onSubmit={(event)=> onSubmit(event)}>
            <input
                type="text"
                placeholder="Add a category"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}