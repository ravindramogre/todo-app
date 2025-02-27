export const ADD_TODO = 'ADD_TODO';
export const DELETE_ALL = 'DELETE_ALL';
export const CHECK_BOX = "CHECKBOX";
export const EDIT = "EDIT";
export const DELETE = "DELETE";

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}
export const deleteAll = () => {
    return {
        type: DELETE_ALL,
    }
}

export const handleCheckBox = (id) => {
    return {
        type: CHECK_BOX,
        id
    }
}
export const handleDelete = (id) => {
    return {
        type: DELETE,
        id
    }
}
export const handleEdit = (payload) => {
    return {
        type: EDIT,
        payload
    }
}