import mongoose,  { model, models, Schema }  from "mongoose";

URI = `mongodb+srv://marc:${process.env.MONGODB_PASSWORD}@cluster0.3jst9iw.mongodb.net/?retryWrites=true&w=majority`

const projectSchema = new Schema({
    name: string,
    id: String, 
    description: String,
    image: String,
    view: String,
    material: string,
  });

  const Project = models.Project || model("Project", projectSchema);

async function connectDatabase() {
  await mongoose.connect(URI);
}

async function getAllProjects() {
  await connectDatabase();

  const projects = await Project.find({});

  return projects;
}

export {getAllProjects}