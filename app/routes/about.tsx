import type { MetaFunction } from '@remix-run/node';
import pic from '../../public/profile-pic.jpg';

export let meta: MetaFunction = () => {
    return {
        title: 'Roman Bytes - Full Stack Developer',
    };
};

export default function Index() {
    return (
        <div className="grid xl:gap-11 grid-cols-1 xl:grid-cols-2 grid-rows-1 my-10 xl:w-full lg:w-3/4 text-md leading-8 font-sans text-white border border-white bg-romanBlack">
            <div className="flex items-center justify-center w-full relative xl:overflow-visible overflow-hidden">
                <img
                    className="xl:relative absolute xl:top-0 -top-36"
                    src={pic}
                    alt="Picture of Jacob Roman"
                />
            </div>
            <div className="xl:pl-0 pl-12 pr-12">
                <h1 className="text-8xl font-bold mt-16 font-ubuntu leading-heading tracking-heading">
                    Hello!
                </h1>
                <div className="text-lg text-stone-500 mt-4 mb-16 font-normal">
                    husband - father - coder - jedi
                </div>
                <div className="text-md">
                    <p>
                        I am full-stack developer who has a strong background
                        with the front-end and is improving my back-end
                        knowledge every day. I was born in 1988 and grew up in
                        Michigan. Once I graduated High School I knew that I
                        wanted to do something with computers. I ended up taking
                        a Graphic Design class and loved it, so I went to Spring
                        Arbor University and got a Bachelor of Fine Arts with a
                        focus on Graphic Design. During my time in college I
                        fell in love with coding and realized that stuff I
                        designed, I could also build in code. Thus began my
                        journey to learn everything I know about coding to this
                        day.
                    </p>
                    <p>
                        I have written code for Steel Fish Design, Traffic
                        Digital Agency, and Deque. I also help out maintain a
                        few open source projects when I have the free time. I
                        currently work at Nexient as a Senior Developer I. In my
                        current position I lead a team of front end developers
                        for a client. In our day to day we use React, GQL, and
                        Sass.
                    </p>
                    <p>
                        I met my wife while attending SAU. We live in a small
                        town in Michigan with our six year old son and two year
                        old daughter.
                    </p>
                </div>
            </div>
        </div>
    );
}
