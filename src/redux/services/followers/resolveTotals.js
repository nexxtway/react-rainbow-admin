const totals = {
    facebook: '143K',
    google: '20K',
    twitter: '13K',
    linkedin: '10K',
};

export default function resolveTotals() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(totals), 2000);
    });
}
