import {NodeHandler, NodeHandlers, TipTapRender} from "@troop.com/tiptap-react-render"



const doc: NodeHandler = (props) => (<>{props.children}</>)

const paragraph: NodeHandler = (props) => {
    return <p>{props.children}</p>
  }
const text: NodeHandler = (props) => { 
    return <span>{props.node.text}</span>
  }


const handlers: NodeHandlers={
    doc:doc,
    text:text,
    paragraph: paragraph,

}

export default function Rendertojson({data}:{data: any}) {
  return (
    <div className="px-2 pt-2 prose dark:prose-invert">
     <TipTapRender handlers={handlers} node={data}/>

    </div>
  )
}
