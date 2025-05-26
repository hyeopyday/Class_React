function TodoCreate() {
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open);
    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm>
                        <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    );
}
export default TodoCreate;