import { useSearchParams } from 'react-router-dom';

const SearchResultsPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get('q');

    return (
        <div>
            You searched for: {q}
        </div>
    );
};

export default SearchResultsPage