import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FC } from 'react';

type Props = {};

const Review: FC<Props> = ({ }) => {
    return (
        <>
            <div className='bg-sky-500 flex flex-col'>
                <div className='flex justify-between mx-44 py-2'>
                    <Card className="w-[350px]">
                        <CardHeader>
                            <CardTitle>Ini Contohnya Gambar</CardTitle>
                            <CardDescription>Apa aja dah biar ada isinya aja.</CardDescription>
                        </CardHeader>
                    </Card>

                    <div className='max-w-sm'>
                        <article className="text-justify">
                            <h3>Review</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a orci et nisl porta bibendum. Quisque ornare mi in orci auctor laoreet. 
                            Vestibulum luctus iaculis mi, in elementum justo euismod dignissim. Nulla vulputate sed sem id elementum. In ut lorem elit. Morbi aliquet, 
                            urna vitae venenatis rutrum, mauris ante posuere turpis, in consequat massa libero nec nunc.
                            </p>
                        </article>
                    </div>
                </div>
                <div className='flex justify-between mx-44 py-2 mt-10'>
                    <div className='max-w-sm'>
                        <article className="text-justify">
                            <h3>Review</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a orci et nisl porta bibendum. Quisque ornare mi in orci auctor laoreet. 
                            Vestibulum luctus iaculis mi, in elementum justo euismod dignissim. Nulla vulputate sed sem id elementum. In ut lorem elit. Morbi aliquet, 
                            urna vitae venenatis rutrum, mauris ante posuere turpis, in consequat massa libero nec nunc.
                            </p>
                        </article>
                    </div>

                    <Card className="w-[350px]">
                        <CardHeader>
                            <CardTitle>Ini Contohnya Gambar</CardTitle>
                            <CardDescription>Apa aja dah biar ada isinya aja.</CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Review;