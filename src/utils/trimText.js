const trimText = (text = '', limit = 15) =>
    text.length > limit ? `${text.substring(0, limit)}...` : text;

    
export default trimText;