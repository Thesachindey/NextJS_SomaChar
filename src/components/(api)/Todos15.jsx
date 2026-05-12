const Todos15 = async () => {
    
  await new Promise((resolve) => setTimeout(resolve, 15000));
    return (
        <div>
            Todos 15s component!
        </div>
    );
};

export default Todos15;