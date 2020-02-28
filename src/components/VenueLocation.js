import dynamic from 'next/dynamic';
const VenueLocation = dynamic(() => import('./Map'), {
    ssr: false
});

export default () => <VenueLocation />;
