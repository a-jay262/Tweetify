import Link from 'next/link';
import Spinner from '@/components/Spinner';
export default function page() {
	return (
		<div className="flex items-center justify-center">
            <Spinner size={45}/>
        </div>
	);
}
