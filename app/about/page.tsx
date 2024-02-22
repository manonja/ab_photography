import { Description } from "../components/description";

export default function About() {
  const text1 = "Born in France and raised in the Netherlands, my photographic journey is deeply rooted in a passion for capturing the details of the world around us. My love for large-format photography stems from this unyielding desire to portray reality with the utmost clarity and precision.";
  const text2 = "My work is a continuous exploration of the relationship between nature and human influence. Using the expansive canvas of large-format photography, I delve into environmental and climate-related subjects, striving to unveil the subtle yet profound interactions between humanity and the natural world. This approach allows for an immersive experience, inviting the viewer to witness the grandeur and intricacy of these dynamics.";
  const text3 = "My background in computer science, machine learning, and artificial intelligence plays a pivotal role in my artistic process. This fusion of technology and art enables me to play in the intersection of technology, science and photography. By integrating analytical techniques and innovative approaches, I am able to enhance the depth and detail of my work, which I want to offer as a new way to engage with and understand the world around us.";
  const text4 = `Currently, I am engaged in a project initially developed in collaboration with Magnum through their mentorship program. This endeavor maps the artificial light over the Netherlands at night, revealing the often unseen impacts of human existence on our environment. It's a visual exploration that seeks to illustrate the hidden aspects of our daily lives.`;
  return (
    <div className="container sm:pt-36">
      <Description text={text1}/>
      <Description text={text2}/>
      <Description text={text3}/>
      <Description text={text4}/>
    </div>
  )
}
