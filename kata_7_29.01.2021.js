const solution = mtrx => {
    
    for (let i = 0; i < mtrx.length; i++) {
        if (mtrx[i].includes('x') && mtrx[i].includes('>')) {
            if (mtrx[i].indexOf('>') < mtrx[i].indexOf('x')) {
                return true;
            }
        }
    }
    return false;
};
// Решается гораздо проще, без использования функций, есть аналоги в методах массивов.