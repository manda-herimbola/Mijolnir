import React from 'react';
import { RecoilRoot } from 'recoil';
import AuthGuard from "./services/AuthGuard";

const App = () => {

    return (
        <React.Fragment>
            <RecoilRoot>

                <AuthGuard />

            </RecoilRoot>
        </React.Fragment>
    );
};

export default App;