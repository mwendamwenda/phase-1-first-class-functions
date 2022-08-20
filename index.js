const spy = chai.spy();
function receivesAFunction(spy){
    spy();
}
function returnsANamedFunction(){
    const fn = (jay,fay)=>jay*fay;
    return fn;
}
function returnsAnAnonymousFunction(){
    return ()=>num1
}
