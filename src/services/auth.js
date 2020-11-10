export function Signin(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'ALeKk02G0qQyeFUIPxUx1xiaaCNsi_e2Yew',
                user: {
                    name: 'Marco Luciano',
                    email: 'helickson99@gmail.com'
                }
            })
        }, 2000);
    })
}