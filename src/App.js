import './App.css';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import MinHeap from './Components/MinHeap';
import MaxHeap from './Components/MaxHeap';
import NewMaxHeap from './Components/NewMaxHeap';
import NewMinHeap from './Components/NewMinHeap';


function BSTApp() {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    
    useEffect(() => {
        enqueueSnackbar("This page is recommended to be used on desktop screen.", {
            variant: 'warning',
        });
    }, [])

    return (
        <div className="App">
            {/* <MinHeap /> */}
            <NewMinHeap />
            {/* <MaxHeap /> */}
            {/* <NewMaxHeap /> */}
        </div>
    );
}

export default BSTApp;
