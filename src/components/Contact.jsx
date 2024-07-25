import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import contact from "../../public/image/contactUs.png";

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message,
        };
        try {
            await axios.post("https://getform.io/f/ayvpeweb", userInfo);
            toast.success("Your message has been sent");
            reset(); // Reset the form fields after successful submission
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <div 
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
        name="Contact">
            <div className="flex-row items-center pl-5 justify-center pt-3">
                <span className="text-3xl font-bold mb-4 text-violet-700">Contact</span>
            </div>
            <div className="mt-5">
                <div className="flex flex-wrap flex-row justify-around">
                    <div className="lg:w-[40%]">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="m-5 flex flex-col gap-3 px-8 py-6 rounded-xl"
                        >
                            <label className="flex flex-col gap-3">
                                <span className="font-medium mb-2">
                                    Your Name
                                </span>
                                <input
                                    {...register("name", { required: true })}
                                    type="text"
                                    name="name"
                                    placeholder="What is your name?"
                                    className="bg-violet-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium"
                                />
                                {errors.name && <span className="text-red-500">This field is required</span>}
                            </label>
                            <label className="flex flex-col gap-3">
                                <span className=" font-medium mb-2">
                                    Your Email
                                </span>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    name="email"
                                    placeholder="What is your email address?"
                                    className="bg-violet-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium"
                                />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </label>
                            <label className="flex flex-col gap-3">
                                <span className=" font-medium mb-2">
                                    Your Message
                                </span>
                                <textarea
                                    {...register("message", { required: true })}
                                    name="message"
                                    rows={5}
                                    placeholder="What would you like to say?"
                                    className="bg-violet-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium"
                                />
                                {errors.message && <span className="text-red-500">This field is required</span>}
                            </label>
                            <button
                                type="submit"
                                className="bg-violet-00 hover:shadow-violet-300 py-3 px-8 mb-4 m-4 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="hidden lg:w-[50%] lg:block">
                        <img src={contact} className="w-[80vw]" alt="Contact" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
