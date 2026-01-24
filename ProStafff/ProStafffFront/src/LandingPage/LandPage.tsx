import { Button, TextInput } from "@mantine/core";
import { IconArrowNarrowRightDashed } from '@tabler/icons-react';

const LandPage=()=>{
    return (
        <div className="flex items-center px-16">
            <div className="flex flex-col w-[45%] gap-3">
                <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">
                    Find Your <span>Dream</span> <span>Job</span>  With Us
                </div>
                <div className="text-lg text-mine-shaft-200">
                    Good Life begins with a good company. Start Explore thousands of jobs in one place.
                </div>
                <div className="flex gap-3 mt-5">
                   
                    <Button rightSection={<IconArrowNarrowRightDashed stroke={2} />}variant="gradient" gradient={{ from: '#ffbd20', to: '#3d3d3d', deg: 285 }} size="lg" mt="md">
                        Hire With Us
                    </Button>
                    <Button variant="outline" color="#f6f6f6" size="lg"  mt="md">
                        Explore Opportunities
                    </Button>
                
                </div>
            </div>
            <div className="w-[55%] flex items-center justify-center">
                <div className="w-[30rem]">
                    <img src="/Boy.png" alt="image failed to load" />
                    {/* <div className="absolute -left-10 w-fit top-[50%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-mud gap-3 flex flex-col">
                        <div className="flex gap-2 items-center">
                            <div className="w-12 h-12 p-1 bg-mine-shaft-700 rounded-lg">
                                <img src="/Google.png" alt="!" />
                            </div>
                            <div className="text-sm text-mine-shaft-100">
                                <div>
                                    Software Engineer
                                </div>
                                <div className="text-mine-shaft-200 text-xs">
                                    New York
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 text-mine-shaft-200 text-xs justify-around">
                            <span>1day ago</span>
                            <span>120 Applicants</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default LandPage;