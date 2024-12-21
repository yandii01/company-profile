import { FC } from 'react';

type Props = {};

const Footer: FC<Props> = ({ }) => {
    return (
        <>
            <div className='bg-stone-800'>
                <h1 className='flex justify-center text-gray-300 py-12'>Created By : @Muehehe</h1>
            </div>
        </>
    );
}

export default Footer;