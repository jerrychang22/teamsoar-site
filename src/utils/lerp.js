function lerp(a, b, t) {
    return (a * (1 - t) + b * t);
}

function lerp2(a, b, c, d, t){
    let s = (t - a) / (b - a);
    return lerp(c, d, s);
}

export { lerp, lerp2 };

