import Post from "./post_item";

function ListPost() {
    let lists = [
        { status: "new", title: "Wiiiiiiiiii", description: "kekeke" },
        { status: "new", title: "Nuh uh", description: "kekeke" },
        { status: "", title: "Heh", description: "kekeke" },
        { status: "", title: "Huh", description: "kekeke" }
    ];
    let data = lists.map((item, index) => {
        return <Post key={index} {...item} />
    });
    return (
        <>
            <h1>List Post</h1>
            {data}
        </>
    );

}

export default ListPost;