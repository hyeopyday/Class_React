const CheckCircle = styled.div`
width: 32px;
height: 32px;
border-radius: 16px;
border: 1px solid #ced4da;
font-size: 24px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor: pointer;
${props =>
        props.done &&
        css`
border: 1px solid #38d9a9;
color: #38d9a9;
`}
`;
const Text = styled.div`
flex: 1;
font-size: 21px;
color: #495057;
${props =>
        props.done &&
        css`
color: #ced4da;
`}
`;
function TodoItem({ id, done, text }) {
    return (
        <TodoItemBlock>
            <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}
export default TodoItem;