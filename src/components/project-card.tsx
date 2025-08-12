import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";


interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  detailUrl?: string;  // <-- new optional prop
  githubUrl?: string;  // <-- already here
}

export function ProjectCard({ img, title, desc, detailUrl, githubUrl }: ProjectCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0">
        <a
          href={detailUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>

        <div className="flex gap-3 items-center">
          {detailUrl && (
            <a href={detailUrl} target="_blank" rel="noopener noreferrer">
              <Button color="gray" size="sm">
                See Details
              </Button>
            </a>
          )}

          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button color="gray" size="sm">
                Github
              </Button>
            </a>
          )}
        </div>
      </CardBody>
    </Card>
  );
}



export default ProjectCard;
