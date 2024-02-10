function debounce<T extends Function>(cb: T, wait = 20) {
    let h = 0;
    let callable = (...args: any) => {
        clearTimeout(h);
        h = setTimeout(() => cb(...args), wait);
    };
    return <T>(<any>callable);
}

// Implementation
const func = debounce((a: string, b: number, c?: number) => console.log(a.length + b + c || 0));
func("Hello", 1, 1);
func("Hellow World", 1);
