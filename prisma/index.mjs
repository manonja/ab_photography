import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const photos = [
    // pyrenees project
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 1, caption: "", projectId: "c361c744-48af-485d-86c8-364621413912"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/pyrenees%2Ffullscreen%2Fpyr-20.webp?alt=media&token=d1275c0b-a4c5-4246-b6f1-84cbf1959308", mobile_blob: "", gallery_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/pyrenees%2Fgallery%2Fpyr-gallery-pyr-20.webp?alt=media&token=df405397-056b-41da-ab48-44dd45539886", sequence: 2, caption: "", projectId: "c361c744-48af-485d-86c8-364621413912"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/pyrenees%2Ffullscreen%2Fpyr-29.webp?alt=media&token=2479327f-bc25-4a1e-af5d-ed560f52bfc1", mobile_blob: "", gallery_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/pyrenees%2Fgallery%2Fpyr-gallery-pyr-29.webp?alt=media&token=0adb3999-790f-4633-a386-6fafe7726a73", sequence: 3, caption: "", projectId: "c361c744-48af-485d-86c8-364621413912"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/pyrenees%2Ffullscreen%2Fpyr-36.webp?alt=media&token=4a8b45db-f210-4ee8-9879-c6191b663178", mobile_blob: "", gallery_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/pyrenees%2Fgallery%2Fpyr-gallery-pyr-36.webp?alt=media&token=6f31d035-31a0-465d-baab-401c364470cb", sequence: 4, caption: "", projectId: "c361c744-48af-485d-86c8-364621413912"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/pyrenees%2Ffullscreen%2Fpyr-5.webp?alt=media&token=0eb8020d-341d-4ff1-8ee7-7e1e958ed841", mobile_blob: "", gallery_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/pyrenees%2Fgallery%2Fpyr-gallery-pyr-5.webp?alt=media&token=c780670f-e2f2-4d57-9709-2e284c6d46b0", sequence: 5, caption: "", projectId: "c361c744-48af-485d-86c8-364621413912"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/pyrenees%2Ffullscreen%2Fpyr-51.webp?alt=media&token=67b2b1a0-f6aa-45f1-be23-dcb605b05808", mobile_blob: "", gallery_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/pyrenees%2Fgallery%2Fpyr-gallery-pyr-51.webp?alt=media&token=d86d50e6-919d-4964-97b3-bf5d42ab961c", sequence: 6, caption: "", projectId: "c361c744-48af-485d-86c8-364621413912"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/pyrenees%2Ffullscreen%2Fpyr-67.webp?alt=media&token=1a84f494-2a28-41be-8682-b3a7d7601891", mobile_blob: "", gallery_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/pyrenees%2Fgallery%2Fpyr-gallery-pyr-67.webp?alt=media&token=ba7512e8-ce60-4b94-b0fe-ecef3b754304", sequence: 7, caption: "", projectId: "c361c744-48af-485d-86c8-364621413912"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/pyrenees%2Ffullscreen%2Fpyr-78.webp?alt=media&token=6bc7242f-837a-4fa5-8c60-cd42f5c89e82", mobile_blob: "", gallery_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/pyrenees%2Fgallery%2Fpyr-gallery-pyr-78.webp?alt=media&token=fef9ccee-6a58-4d64-aadb-da9be50c3dc1", sequence: 8, caption: "", projectId: "c361c744-48af-485d-86c8-364621413912"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/pyrenees%2Ffullscreen%2Fpyr-81.webp?alt=media&token=10ed8e4e-5936-4299-ab00-fb7be375fe6d", mobile_blob: "", gallery_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/pyrenees%2Fgallery%2Fpyr-gallery-pyr-81.webp?alt=media&token=a3d5fc7b-84e2-4446-af5d-fbc30f35bda5", sequence: 9, caption: "", projectId: "c361c744-48af-485d-86c8-364621413912"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/pyrenees%2Ffullscreen%2Fpyr-92.webp?alt=media&token=1004316c-d89d-4ede-b00d-ea4fa7825d62", mobile_blob: "", gallery_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/pyrenees%2Fgallery%2Fpyr-gallery-pyr-92.webp?alt=media&token=74004869-adaf-422b-9751-9672ca3fdb76", sequence: 10, caption: "", projectId: "c361c744-48af-485d-86c8-364621413912"},

    // 7rad project
    // { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 1, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Ffullscreen%2F7rad-2023-11-04%2021.18.51CF002270.webp?alt=media&token=f3d88664-e544-47de-b501-eabe0fba9847", mobile_blob: "", gallery_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Fgallery%2F7rad-gallery-%2021.18.51CF002270-gallery.webp?alt=media&token=708c6f2f-7e95-4eda-aff8-71cd313376ab", sequence: 2, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5" },
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Ffullscreen%2F7rad-2023-11-16%2006.43.46CF002990.webp?alt=media&token=31a9e3d0-66f8-41e9-a5fe-31e6a21e4500", mobile_blob: "", gallery_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Fgallery%2F7rad-gallery-2023-11-16%2006.43.46CF002990-gallery.webp?alt=media&token=616e89a8-05be-44c7-9248-3f1c51fa91ca", sequence: 3, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Ffullscreen%2F7rad-2023-11-17%2018.13.17CF003143.webp?alt=media&token=869c54be-e509-427f-a49e-3c427c4fecdc", mobile_blob: "", gallery_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Fgallery%2F7rad-gallery-2023-11-17%2018.13.17CF003143-gallery.webp?alt=media&token=ad241230-7b13-44fa-a7ab-9e893df77356", sequence: 4, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Ffullscreen%2F7rad-2023-11-18%2009.31.43CF003209.webp?alt=media&token=396a6b03-4ed3-4afe-af03-54dada967463", mobile_blob: "", gallery_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Fgallery%2F7rad-gallery-2023-11-18%2009.31.43CF003209-gallery.webp?alt=media&token=5ad3ce9c-66b9-4ca0-b186-2b206d94ae47", sequence: 5, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Ffullscreen%2F7rad-2023-11-21%2008.27.15CF003253.webp?alt=media&token=7af4a923-5ac5-4c92-abaa-3aa4b5283982", mobile_blob: "", gallery_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Fgallery%2F7rad-gallery-2023-11-21%2008.27.15CF003253-gallery.webp?alt=media&token=b11fe7af-f376-4974-b904-14b91019ffc1", sequence: 6, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Ffullscreen%2F7rad-2023-11-25%2006.02.13CF003371.webp?alt=media&token=264aaefb-c4ca-4a87-83c1-78ab7b79c02c", mobile_blob: "", gallery_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Fgallery%2F7rad-gallery-2023-11-25%2006.02.13CF003371-gallery.webp?alt=media&token=620bf9aa-f31d-4ba8-b57a-e9835b764ea3", sequence: 7, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Ffullscreen%2F7rad-2023-12-02%2005.48.26CF003664.webp?alt=media&token=1dfc4ee5-a5a4-4df0-ab81-c0b83b6b7993", mobile_blob: "", gallery_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Fgallery%2F7rad-gallery-2023-12-02%2005.48.26CF003664-gallery.webp?alt=media&token=a2d898e4-4cde-4468-aecf-5b4f615c2bb6", sequence: 8, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Ffullscreen%2F7rad-2023-12-03%2013.26.37CF003931.webp?alt=media&token=0d414ee9-850f-40d2-bd41-38261ef71610", mobile_blob: "", gallery_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Fgallery%2F7rad-gallery-2023-12-03%2013.26.37CF003931-gallery.webp?alt=media&token=935b303f-d750-47ce-9e74-1d121c6e4a55", sequence: 9, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Ffullscreen%2F7rad-2023-12-05%2006.47.03CF004005.webp?alt=media&token=62846ab6-ce40-4334-9f7c-0cff58ad036a", mobile_blob: "", gallery_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Fgallery%2F7rad-gallery-2023-12-05%2006.47.03CF004005-gallery.webp?alt=media&token=d1ad766b-0c95-4732-b8fc-d61f553c35b0", sequence: 10, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Ffullscreen%2F7rad-2023-12-08%2006.01.39CF004077.webp?alt=media&token=d050302f-fd23-44b0-a5bc-59b8dbaa4902", mobile_blob: "", gallery_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Fgallery%2F7rad-gallery-2023-12-08%2006.01.39CF004077-gallery.webp?alt=media&token=c0952305-adad-4d9b-baa0-070965bde284", sequence: 11, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Ffullscreen%2F7rad-2023-12-09%2005.27.10CF004119.webp?alt=media&token=7ef51b56-6b4c-4743-8f77-892d4648ad86", mobile_blob: "", gallery_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Fgallery%2F7rad-gallery-2023-12-09%2005.27.10CF004119-gallery.webp?alt=media&token=b76f41ac-df59-4c46-86ba-10d17e9bbd04", sequence: 12, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Ffullscreen%2F7rad-2023-12-10%2014.44.48CF004357.webp?alt=media&token=7e680a68-a0cc-415f-8bdd-efbaa2b808cd", mobile_blob: "", gallery_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Fgallery%2F7rad-gallery-2023-12-10%2014.44.48CF004357-gallery.webp?alt=media&token=e1cd6856-df68-4d63-b77f-fcf6697776ef", sequence: 13, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Ffullscreen%2F7rad-2023-12-15%2020.13.02CF004540.webp?alt=media&token=90a3e94e-2dfa-433a-93d1-e6dc2cde64d5", mobile_blob: "", gallery_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/7rad%2Fgallery%2F7rad-gallery-2023-12-11%2019.05.05CF004417-gallery.webp?alt=media&token=7b39c54d-4299-41ad-9dfb-2874d7f81b5e", sequence: 14, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 15, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},
    { desktop_blob: "", mobile_blob: "", gallery_blob: "", sequence: 16, caption: "", projectId: "bb881148-eb1a-4250-ba85-80b4f7a2d3d5"},

    // // homepage: 2, caption: ""},
    // { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/landing%2Ffullscreen%2Fslide-0.webp?alt=media&token=88428d6b-2dbe-4472-bb2e-4030dc076fc2", mobile_blob: "", gallery_blob: "", sequence: 2, caption: "", projectId: "4b077516-709a-4507-96b1-da5e7b3b044c"},
    // { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/landing%2Ffullscreen%2Fslide-2.webp?alt=media&token=b06f03d8-93c2-4222-836e-b15d2f872e4f", mobile_blob: "", gallery_blob: "", sequence: 3, caption: "", projectId: "4b077516-709a-4507-96b1-da5e7b3b044c"},
    // { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/landing%2Ffullscreen%2Fslide-3.webp?alt=media&token=ebcb75b8-0652-49ac-b657-4f01613fe071", mobile_blob: "", gallery_blob: "", sequence: 4, caption: "", projectId: "4b077516-709a-4507-96b1-da5e7b3b044c"},
    // { desktop_blob: "https://firebasestorage.googleapis.com/v0/b/ab-photography-5af63.appspot.com/o/landing%2Ffullscreen%2Fslide-4.webp?alt=media&token=b53b394c-3266-4dbf-8141-be71d91fe4f2", mobile_blob: "", gallery_blob: "", sequence: 5, caption: "", projectId: "4b077516-709a-4507-96b1-da5e7b3b044c"},
 
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
    // await Promise.all(photos.map(async (photo) => {
    //     await prisma.photo.create({data: photo})
    // }))

    // Create multiple projects at once
    await Promise.all(projects.map(async (project) => {
        await prisma.project.create({data: project})
    }))

  // const allProjects = await prisma.project.findMany({
  //   include: {
  //     photos: true,
  //   },
  // });
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
