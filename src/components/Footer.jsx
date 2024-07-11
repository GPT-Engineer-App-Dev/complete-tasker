const Footer = ({ tasksLeft, clearCompleted }) => {
  return (
    <footer className="flex justify-between items-center p-4 bg-muted/40">
      <span>{tasksLeft} tasks left</span>
      <button onClick={clearCompleted} className="text-red-500">
        Clear Completed
      </button>
    </footer>
  );
};

export default Footer;