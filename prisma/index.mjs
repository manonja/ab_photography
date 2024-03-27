import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const photos = [
    // pyrenees project
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 1, caption: "", projectId: "c361c744-48af-485d-86c8-364621413912"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 2, caption: "", projectId: "c361c744-48af-485d-86c8-364621413912"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 3, caption: "", projectId: "c361c744-48af-485d-86c8-364621413912"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 4, caption: "", projectId: "c361c744-48af-485d-86c8-364621413912"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 5, caption: "", projectId: "c361c744-48af-485d-86c8-364621413912"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 6, caption: "", projectId: "c361c744-48af-485d-86c8-364621413912"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 7, caption: "", projectId: "c361c744-48af-485d-86c8-364621413912"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 8, caption: "", projectId: "c361c744-48af-485d-86c8-364621413912"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 9, caption: "", projectId: "c361c744-48af-485d-86c8-364621413912"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 10, caption: "", projectId: "c361c744-48af-485d-86c8-364621413912"},

    // 7rad project
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 1, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 2, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5" },
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 3, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 4, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 5, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 6, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 7, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 8, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 9, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 10, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 11, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 12, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 13, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 14, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 15, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 16, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},

    // // homepage: 2, caption: ""},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/landing%2Ffullscreen%2Fslide-0.webp?alt=media&token=88428d6b-2dbe-4472-bb2e-4030dc076fc2", mobile_blob: "", gallery_blob: "", sequence: 2, caption: "", projectId: "4b077516-709a-4507-96b1-da5e7b3b044c"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/landing%2Ffullscreen%2Fslide-2.webp?alt=media&token=b06f03d8-93c2-4222-836e-b15d2f872e4f", mobile_blob: "", gallery_blob: "", sequence: 3, caption: "", projectId: "4b077516-709a-4507-96b1-da5e7b3b044c"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/landing%2Ffullscreen%2Fslide-3.webp?alt=media&token=ebcb75b8-0652-49ac-b657-4f01613fe071", mobile_blob: "", gallery_blob: "", sequence: 4, caption: "", projectId: "4b077516-709a-4507-96b1-da5e7b3b044c"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/landing%2Ffullscreen%2Fslide-4.webp?alt=media&token=b53b394c-3266-4dbf-8141-be71d91fe4f2", mobile_blob: "", gallery_blob: "", sequence: 5, caption: "", projectId: "4b077516-709a-4507-96b1-da5e7b3b044c"},
 
  ];
  await prisma.$connect();

  // await prisma.photo.create({
  //   data: {
  //
  //         desktop_blob:
  //           "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/landing%2Ffullscreen%2Fslide-0.webp?alt=media&token=88428d6b-2dbe-4472-bb2e-4030dc076fc2",
  //         mobile_blob:
  //           "",
  //         gallery_blob:
  //           "",
  //         sequence: 2,
  //         caption: "",
  //         projectId: "2a4d508b-26c9-40f9-b8aa-8b69bf00d585"
  //       },
  //
  // });

  const projects = [
      {
          title: "Homepage",
          isPublished: true,
          photos: {
              create: {
                  desktop_blob:
                      "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/landing%2Ffullscreen%2Fslide-3.webp?alt=media&token=ebcb75b8-0652-49ac-b657-4f01613fe071",
                  mobile_blob:
                      "",
                  gallery_blob:
                      "",
                  sequence: 1,
                  caption: "",
              },
          },
      },
      {
          title: "7 Rad",
          isPublished: true,
          photos: {
              create: {
                  desktop_blob:
                      "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Ffullscreen%2F7rad-2023-12-01%2005.24.17CF003585.webp?alt=media&token=63bef986-7344-4446-959f-5062c6509a5d",
                  mobile_blob:
                      "",
                  gallery_blob:
                      "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Fgallery%2F7rad-gallery-2023-12-01%2005.24.17CF003585-gallery.webp?alt=media&token=6d1919ef-a2d9-4946-9a9e-c7fc72cf6d58",
                  sequence: 1,
                  caption: "",
              },
          },
      },
      {
          title: "Pyrénées",
          isPublished: true,
          photos: {
              create: {
                  desktop_blob:
                      "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/pyrenees%2Ffullscreen%2Fpyr-101.webp?alt=media&token=6dc2e877-c8cf-4690-947f-87395a4f01c3",
                  mobile_blob:
                      "",
                  gallery_blob:
                      "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/pyrenees%2Fgallery%2Fpyr-gallery-pyr-101.webp?alt=media&token=8544676b-e324-431f-9a33-482289d010fb",
                  sequence: 1,
                  caption: "",
              },
          },
      }
  ]

    // Create multiple photos at once
    await Promise.all(photos.map(async (photo) => {
        await prisma.photo.create({data: photo})
    }))

    // Create multiple projects at once
    // await Promise.all(projects.map(async (project) => {
    //     await prisma.project.create({data: project})
    // }))

  const allProjects = await prisma.project.findMany({
    include: {
      photos: true,
    },
  });
  // console.dir(allProjects, { depth: null });

    // const allPhotos = await prisma.photo.findMany({
    //     where: {
    //         projectId: "2a4d508b-26c9-40f9-b8aa-8b69bf00d585",
    //     },
    // });
    // console.dir(allPhotos, { depth: null });

}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
