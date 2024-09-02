import { toast } from 'react-hot-toast';

export default function SearchBar({ onSubmit }) {
    const handleSubmit = e => {
        e.preventDefault();
        const query = e.target.elements.query.value.trim();
        if (!query) {
            toast.error("Please enter a search term!");
            return;
        }
        onSubmit(query);
    };

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input type="text" name="query" autoComplete="off" autoFocus placeholder="Search images and photos" />
                <button type="submit">Search</button>
            </form>
        </header>
    );
}
