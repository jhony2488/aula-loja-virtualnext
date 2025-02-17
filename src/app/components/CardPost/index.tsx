type PropsCardPost = {
    title: string;
    description: string;
    id: number;
}

export default function CardPost({ title, id, description }: PropsCardPost) {
    return (
        <div className="flex flex-col gap-4 p-8 bg-white border-solid border-2 border-inherit">
            <a href={`/posts/${id}`}><h2 className="text-lg">{title}</h2></a>
            <p className="text-base">{description.slice(0, 100)}</p>
            <a className="text-base" href={`/posts/${id}`}>Leia Mais</a>
        </div>
    );
}